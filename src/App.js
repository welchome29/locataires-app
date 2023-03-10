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
          <Route path="/private/petit d??jeuner" element={<PrivateShopPetitDej />} />
          <Route path="/private/fruits de mer" element={<PrivateShopFruitsdeMer />} />
          <Route path="/private/ap??ro" element={<PrivateShopApero />} />
          <Route path="/private/vins" element={<PrivateShopVins />} />
          <Route path="/private/fruits et l??gumes" element={<PrivateShopFruitsLegs />} />
          <Route path="/private/plats cuisin??s" element={<PrivateShopPlats />} />
          <Route path="/private/spiritueux" element={<PrivateShopSpiritueux />} />
          <Route path="/private/sports nautiques" element={<PrivateSportsNautiques />} />
          <Route path="/private/visites" element={<PrivateVisites />} />
          <Route path="/private/p??che" element={<PrivatePeche />} />
          <Route path="/private/bien-??tre" element={<PrivateBienEtre />} />
          <Route path="/private/location de v??los" element={<PrivateLocationVelo />} />
          <Route path="/private/r??servation kayak" element={<PrivateResaKayak />} />
          <Route path="/private/r??servation paddle" element={<PrivateResaPaddle />} />
          <Route path="/private/r??servation catamaran" element={<PrivateResaCatamaran />} />
          <Route path="/private/r??servation d??riveur" element={<PrivateResaDeriveur />} />
          <Route path="/private/r??servation planche ?? voile" element={<PrivateResaPlanche />} />
          <Route path="/private/r??servation trimaran" element={<PrivateResaTrimaran />} />
          <Route path="/private/r??servation ch??teau du taureau" element={<PrivateResaChateau />} />
          <Route path="/private/r??servation ??le de batz" element={<PrivateResaBatz />} />
          <Route path="/private/infos ??le callot" element={<PrivateInfosCallot />} />
          <Route path="/private/infos gr34" element={<PrivateInfosGR34 />} />
          <Route path="/private/infos monts d'arr??e" element={<PrivateInfosCrete />} />
          <Route path="/private/p??che demi-journ??e" element={<PrivateResaPecheDemi />} />
          <Route path="/private/p??che journ??e" element={<PrivateResaPecheJournee />} />
          <Route path="/private/p??che soir??e" element={<PrivateResaPecheSoiree />} />
          <Route path="/private/massage zen" element={<PrivateResaBienEtreMassage />} />
          <Route path="/private/pause douceur" element={<PrivateResaBienEtreDouceur />} />
          <Route path="/private/pause hydrosensorielle" element={<PrivateResaBienEtreHydro />} />
          <Route path="/private/r??servation v??lo morlaix" element={<PrivateResaVeloMlx />} />
          <Route path="/private/r??servation v??lo carantec" element={<PrivateResaVeloCar />} />
          <Route path="/private/r??servation v??lo ??le de batz" element={<PrivateResaVeloBatz />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
