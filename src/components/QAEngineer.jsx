import qaEngineerImage from '../assets/qaEngineer.jpg';

const QAEngineer = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>QA-инженер</strong> — специалист, который следит за качеством продукта на всех этапах его разработки. В современных реалиях работа QA-инженера начинается ещё на стадии написания
        технической документации: он тестирует её и проверяет требования к продукту на наличие ошибок, тем самым помогая компании экономить на их исправлении. QA-инженеров часто путают с
        тестировщиками, хотя эти профессии сильно отличаются друг от друга.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={qaEngineerImage} alt='qaEngineerImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default QAEngineer;
