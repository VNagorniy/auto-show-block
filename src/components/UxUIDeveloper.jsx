import uxUIDeveloperImage from '../assets/uxUIDeveloper.jpg';

const UxUIDeveloper = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>UX/UI-дизайнер</strong> — специалист, задача которого сделать продукт удобным, понятным и логичным для всех пользователей. От его работы зависит, сможет ли клиент быстро и удобно
        получить желаемую услугу. Перед запуском продукта он всегда совершает большую подготовительную работу: проводит аудит конкурентов, опрашивает пользователей, изучает целевую аудиторию сайта или
        приложения. А также выполняет наполнение сайта, систематизацию элементов, выбор цветов, построение визуальной композиции, оформление кнопок, колонок и других графических элементов.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={uxUIDeveloperImage} alt='uxUIDeveloperImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default UxUIDeveloper;
