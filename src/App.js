import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SignUpModal from "./components/SignUpModal"
import SignInModal from "./components/SignInModal"
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'
import PrivateShop from './pages/Private/Shop'
import PrivateShopPetitDej from './pages/Private/PetitDej'
import PrivateShopFruitsdeMer from './pages/Private/FruitsDeMer'
import PrivateShopApero from './pages/Private/Apero'
import PrivateShopVins from './pages/Private/Vins'
import PrivateShopFruitsLegs from './pages/Private/FruitsLegs'
import PrivateShopPlats from './pages/Private/Plats'
import PrivateShopSpiritueux from './pages/Private/Spiritueux'
import PrivateLoisirs from './pages/Private/Loisirs'
import PrivateSportsNautiques from './pages/Private/SportsNautiques'
import PrivateResaKayak from './pages/Private/ResaKayak'
import PrivateResaPaddle from './pages/Private/ResaPaddle'
import PrivateResaDeriveur from './pages/Private/ResaDeriveur'
import PrivateResaPlanche from './pages/Private/ResaPlanche'
import PrivateResaTrimaran from './pages/Private/ResaTrimaran'
import PrivateResaCatamaran from './pages/Private/ResaCatamaran'
import PrivateVisites from './pages/Private/Visites'
import PrivateResaChateau from './pages/Private/ResaChateau'
import PrivateResaBatz from './pages/Private/ResaBatz'
import PrivateInfosCallot from './pages/Private/InfosCallot'
import PrivateInfosGR34 from './pages/Private/InfosGR34'
import PrivateInfosCrete from './pages/Private/InfosCrete'
import PrivatePeche from './pages/Private/Peche'
import PrivateResaPecheDemi from './pages/Private/ResaPecheDemi'
import PrivateResaPecheJournee from './pages/Private/ResaPecheJournee'
import PrivateResaPecheSoiree from './pages/Private/ResaPecheSoiree'
import PrivateBienEtre from './pages/Private/BienEtre'
import PrivateResaBienEtreMassage from './pages/Private/ResaMassage'
import PrivateResaBienEtreDouceur from './pages/Private/ResaDouceur'
import PrivateResaBienEtreHydro from './pages/Private/ResaHydro'
import PrivateLocationVelo from './pages/Private/LocationVelo'
import PrivateResaVeloMlx from './pages/Private/ResaVeloMlx'
import PrivateResaVeloCar from './pages/Private/ResaVeloCar'
import PrivateResaVeloBatz from './pages/Private/ResaVeloBatz'
import PrivateTraiteur from './pages/Private/Traiteur'
import PrivatePlanning from './pages/Private/Planning'
import Cart from './pages/Private/Cart'
import Contact from './pages/Private/Contact'
import CartValidate from "./pages/Private/CartValidate"

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
          <Route path="/private/accueil" element={<PrivateHome />} />
          <Route path="/private/shop" element={<PrivateShop />} />
          <Route path="/private/loisirs" element={<PrivateLoisirs />} />
          <Route path="/private/traiteur" element={<PrivateTraiteur />} />
          <Route path="/private/planning" element={<PrivatePlanning />} />
          <Route path="/private/contact" element={<Contact />} />
          <Route path="/private/cart" element={<Cart />} />
          <Route path="/private/cartvalidate" element={<CartValidate />} />
          <Route path="/private/petit déjeuner" element={<PrivateShopPetitDej />} />
          <Route path="/private/fruits de mer" element={<PrivateShopFruitsdeMer />} />
          <Route path="/private/apéro" element={<PrivateShopApero />} />
          <Route path="/private/vins" element={<PrivateShopVins />} />
          <Route path="/private/fruits et légumes" element={<PrivateShopFruitsLegs />} />
          <Route path="/private/plats cuisinés" element={<PrivateShopPlats />} />
          <Route path="/private/spiritueux" element={<PrivateShopSpiritueux />} />
          <Route path="/private/sports nautiques" element={<PrivateSportsNautiques />} />
          <Route path="/private/visites" element={<PrivateVisites />} />
          <Route path="/private/pêche" element={<PrivatePeche />} />
          <Route path="/private/bien-être" element={<PrivateBienEtre />} />
          <Route path="/private/location de vélos" element={<PrivateLocationVelo />} />
          <Route path="/private/réservation kayak" element={<PrivateResaKayak />} />
          <Route path="/private/réservation paddle" element={<PrivateResaPaddle />} />
          <Route path="/private/réservation catamaran" element={<PrivateResaCatamaran />} />
          <Route path="/private/réservation dériveur" element={<PrivateResaDeriveur />} />
          <Route path="/private/réservation planche à voile" element={<PrivateResaPlanche />} />
          <Route path="/private/réservation trimaran" element={<PrivateResaTrimaran />} />
          <Route path="/private/réservation château du taureau" element={<PrivateResaChateau />} />
          <Route path="/private/réservation île de batz" element={<PrivateResaBatz />} />
          <Route path="/private/infos île callot" element={<PrivateInfosCallot />} />
          <Route path="/private/infos gr34" element={<PrivateInfosGR34 />} />
          <Route path="/private/infos monts d'arrée" element={<PrivateInfosCrete />} />
          <Route path="/private/pêche demi-journée" element={<PrivateResaPecheDemi />} />
          <Route path="/private/pêche journée" element={<PrivateResaPecheJournee />} />
          <Route path="/private/pêche soirée" element={<PrivateResaPecheSoiree />} />
          <Route path="/private/massage zen" element={<PrivateResaBienEtreMassage />} />
          <Route path="/private/pause douceur" element={<PrivateResaBienEtreDouceur />} />
          <Route path="/private/pause hydrosensorielle" element={<PrivateResaBienEtreHydro />} />
          <Route path="/private/réservation vélo morlaix" element={<PrivateResaVeloMlx />} />
          <Route path="/private/réservation vélo carantec" element={<PrivateResaVeloCar />} />
          <Route path="/private/réservation vélo île de batz" element={<PrivateResaVeloBatz />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
