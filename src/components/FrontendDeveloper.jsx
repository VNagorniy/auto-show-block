import frontendDeveloperImage from '../assets/FrontendDeveloper.jpg';

const FrontendDeveloper = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>Frontend-разработчик</strong> — это специалист, который занимается разработкой пользовательского интерфейса, то есть той части сайта или приложения, которую видят посетители страницы.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={frontendDeveloperImage} alt='frontendDeveloperImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default FrontendDeveloper;
