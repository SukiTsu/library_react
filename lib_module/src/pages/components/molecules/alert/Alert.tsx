// lib_module/src/components/organismes/alert/Alert.tsx

import React, { useEffect } from 'react';
import '../../../../assets/css/pages/alert.css'; 
import { useState } from 'react';

// Types d'alertes
type AlertType = 'success' | 'error' | 'warning' | 'info';

// Définition des props du composant Alert
interface AlertProps {
  type: AlertType;
  message: string;
  autoClose?: boolean;
  autoCloseTime?: number; // en millisecondes
}

// Composant Alert
const Alert: React.FC<AlertProps> = ({
  type,
  message,
  autoClose,
  autoCloseTime = 5000 // Par défaut 5 secondes
}) => {
  // Gestion de la fermeture automatique
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(closeAlert, autoCloseTime);
      return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
    }
  }, [autoClose, autoCloseTime]);

  const [showAlert, setShowAlert] = useState(true);

  const openAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false); 
  };

  // Fonction pour obtenir les classes CSS en fonction du type d'alerte
  const getAlertClass = () => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return '';
    }
  };

  if (showAlert){
    return (
    <div className={`alert ${getAlertClass()}`}>
      {/* Id de test data-testid, cf Alert_data.tsx : */}
      <span data-testid="message">{message}</span>
      <button className="alert-close-btn" onClick={closeAlert}>
        &times; {/* Symbole pour fermer */}
      </button>
    </div>
  );
};
}
export default Alert;
