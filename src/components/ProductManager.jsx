import productManagerImage from '../assets/productManager.jpg';

const ProductManager = () => {
  return (
    <div className='mt-4'>
      <div className='fs-3'>
        <strong>Product-менеджер</strong> — это специалист, работающий на стыке бизнеса, маркетинга и программирования. Он на всех этапах контролирует работу над новым продуктом, взаимодействует с
        инвесторами и пользователями и продолжает развивать свое детище после окончания технической реализации.
      </div>
      <div className='container mt-4'>
        <img className='rounded' src={productManagerImage} alt='productManagerImage' />
      </div>
      <div>
        <span>
          Фото взято с <a href='https://start.cloveri.com/project/notepad/'>сайта</a>
        </span>
      </div>
    </div>
  );
};

export default ProductManager;
