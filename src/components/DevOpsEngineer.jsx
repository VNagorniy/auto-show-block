import devOpsEngineerImage from '../assets/devOpsEngineer.jpg';

const DevOpsEngineer = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>DevOps-инженер</strong> — это специалист, область деятельности которого лежит немного в стороне по отношению к разработке продукта/продуктов. Он занимается настройкой инструментов и
        систем, которые позволяют более часто и качественно доносить фичи разработанных продуктов до клиентов.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={devOpsEngineerImage} alt='devOpsEngineerImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default DevOpsEngineer;
