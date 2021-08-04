import './assets/header.css';
import SearchInput from '../../components/SearchInput';
import { Container } from 'reactstrap';
import NavbarComponent from '../../components/NavbarComponent'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <NavbarComponent/>
        <div className="wrapper">
          <Container>
            <div className="text-center">
              <h2>Pixabay API</h2>
              <h4>Find Your Images as a Free</h4>
            </div>
            <SearchInput />
          </Container>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
