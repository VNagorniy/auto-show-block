import { useEffect, useState } from 'react';
import BackendDeveloper from './components/BackendDeveloper';
import DevOpsEngineer from './components/DevOpsEngineer';
import FrontendDeveloper from './components/FrontendDeveloper';
import ProductManager from './components/ProductManager';
import QAEngineer from './components/QAEngineer';
import UxUIDeveloper from './components/UxUIDeveloper';

export default function App() {
  const [role, setRole] = useState('selectRole');

  const [BackendDeveloperContentVisible, setBackendDeveloperContentVisible] = useState(false);
  const [DevOpsEngineerContentVisible, setDevOpsEngineerContentVisible] = useState(false);
  const [FrontendDeveloperContentVisible, setFrontendDeveloperContentVisible] = useState(false);
  const [ProductManagerContentVisible, setProductManagerContentVisible] = useState(false);
  const [QAEngineerContentVisible, setQAEngineerContentVisible] = useState(false);
  const [UxUIDeveloperContentVisible, setUxUIDeveloperContentVisible] = useState(false);

  useEffect(() => {
    role === 'backendDeveloper' ? setBackendDeveloperContentVisible(true) : setBackendDeveloperContentVisible(false);
    role === 'devOpsEngineer' ? setDevOpsEngineerContentVisible(true) : setDevOpsEngineerContentVisible(false);
    role === 'frontendDeveloper' ? setFrontendDeveloperContentVisible(true) : setFrontendDeveloperContentVisible(false);
    role === 'productManager' ? setProductManagerContentVisible(true) : setProductManagerContentVisible(false);
    role === 'qAEngineer' ? setQAEngineerContentVisible(true) : setQAEngineerContentVisible(false);
    role === 'uxUIDeveloper' ? setUxUIDeveloperContentVisible(true) : setUxUIDeveloperContentVisible(false);
  }, [role]);

  const handleOnChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className='container mt-3'>
      <div>
        <h1>Привет, выбери доступную роль и ознакомся с ней</h1>
      </div>
      <div>
        <select className='form-select' value={role} onChange={handleOnChange}>
          <option value='backendDeveloper'>Backend - разработчик</option>
          <option value='devOpsEngineer'>DevOps-инженер</option>
          <option value='frontendDeveloper'>Frontend-разработчик</option>
          <option value='productManager'>Product-менеджер</option>
          <option value='qAEngineer'>QA-инженер</option>
          <option value='uxUIDeveloper'>UX/UI-дизайнер</option>
        </select>
      </div>
      {BackendDeveloperContentVisible && <BackendDeveloper />}
      {DevOpsEngineerContentVisible && <DevOpsEngineer />}
      {FrontendDeveloperContentVisible && <FrontendDeveloper />}
      {ProductManagerContentVisible && <ProductManager />}
      {QAEngineerContentVisible && <QAEngineer />}
      {UxUIDeveloperContentVisible && <UxUIDeveloper />}
    </div>
  );
}
