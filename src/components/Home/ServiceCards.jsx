import { useEffect, useMemo, useState } from 'react';
import { getEmployeeCards } from '../../services/employeeCardService';

function ServiceCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchCards = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const response = await getEmployeeCards();
        if (!isMounted) return;

        const responseCards = Array.isArray(response?.data) ? response.data : [];
        const activeCards = responseCards.filter((card) => card.isActive !== false);

        activeCards.sort((a, b) => {
          const orderA = Number(a.displayOrder ?? a.displayorder ?? a.order ?? 0);
          const orderB = Number(b.displayOrder ?? b.displayorder ?? b.order ?? 0);
          return orderA - orderB;
        });

        setCards(activeCards);
      } catch (err) {
        if (isMounted) {
          setError(true);
          setCards([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCards();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedCards = useMemo(() => [...cards], [cards]);

  const renderCard = (card, index) => {
    const titleLine = card.titleLine || '';
    const highlightedText = card.highlightedText || '';
    const badgeText = card.badgeText || card.subtitle || card.shortDescription || 'Employee Opportunity';
    const descriptionText = card.description || card.shortDescription || 'Explore opportunities tailored to your career goals.';

    const isEmployer = card.cardType === 'employer';
    const employerBg = '#cde87a';
    const employeeBg = '#ffffff';
    const mainBlue = '#004CA5';
    const highlightOrange = '#FF8A00';

    return (
      <div
        key={card._id || `${badgeText}-${index}`}
        className="rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-2 sm:p-10 lg:p-14"
        style={{ backgroundColor: isEmployer ? employerBg : employeeBg }}
      >

        {card.image ? (
          <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img src={card.image} alt={titleLine || badgeText} className="h-48 w-full object-cover" />
          </div>
        ) : null}

        <span className="inline-flex rounded-full border border-orange-400 bg-white px-4 py-2 text-sm font-bold" style={{ color: mainBlue }}>
          {badgeText}
        </span>

        <h2 className={`mt-8 text-3xl font-extrabold leading-tight sm:text-4xl`} style={{ color: isEmployer ? '#ffffff' : mainBlue }}>
          {titleLine} {highlightedText ? <span style={{ color: highlightOrange }}>{highlightedText}</span> : null}
        </h2>

        <p className="mt-4 max-w-lg text-base leading-7 opacity-90" style={{ color: isEmployer ? '#ffffff' : mainBlue }}>
          {descriptionText}
        </p>

        {card.buttonText ? (
          <a
            href={card.buttonLink || '#'}
            className="mt-8 inline-flex rounded-full bg-orange-400 px-8 py-3 font-bold text-white"
            style={{ backgroundColor: highlightOrange }}
          >
            {card.buttonText}
          </a>
        ) : null}
      </div>
    );
  };

  return (
    <section className="bg-[#f4f7fb]">
      <div className="mx-auto max-w-375 px-6 py-16 sm:px-10 lg:px-14">
        {isLoading ? (
          <div className="grid gap-10 md:grid-cols-2">
            {[1, 2].map((item) => (
              <div key={item} className="min-h-82.5 animate-pulse rounded-3xl bg-white p-14 shadow-sm">
                <div className="h-8 w-32 rounded-full bg-slate-200" />
                <div className="mt-8 h-10 w-3/4 rounded bg-slate-200" />
                <div className="mt-6 h-20 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-white p-10 text-center text-slate-600 shadow-sm">
            We could not load the employee cards right now. Please refresh the page and try again.
          </div>
        ) : sortedCards.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm">
            No employee cards are available right now.
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {sortedCards.map((card, index) => renderCard(card, index))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceCards;