import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BecomePartnerHero from '../components/becomePartner/BecomePartnerHero';
import PartnershipContactSection from '../components/becomePartner/PartnershipContactSection';
import BuiltOnTrustSection from '../components/becomePartner/BuiltOnTrustSection';
import RecruitmentNetworkSection from '../components/becomePartner/RecruitmentNetworkSection';

export default function BecomePartner() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar variant="partner" />
      <BecomePartnerHero />
      <PartnershipContactSection />
      <BuiltOnTrustSection />
      <RecruitmentNetworkSection />
      <Footer />
    </div>
  );
}
