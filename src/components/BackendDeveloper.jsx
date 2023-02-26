import backendDeveloperImage from '../assets/backendDeveloper.jpg';

const BackendDeveloper = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>Backend-разработчик</strong> — это специалист, который занимается программно-административной частью веб-приложения, внутренним содержанием системы, серверными технологиями — базой
        данных, архитектурой, программной логикой.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={backendDeveloperImage} alt='backendDeveloperImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default BackendDeveloper;
