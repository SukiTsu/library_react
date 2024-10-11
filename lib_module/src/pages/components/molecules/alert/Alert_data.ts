// lib_module/src/conponents/molecules/alert/Alert_data.ts

// Type d'alerte :
type AlertType = 'success' | 'error' | 'warning' | 'info';
export const type: AlertType = "error";

// Message de l'alerte :
export const message: string = "Message d'alerte !";

// Alert autoclose ? : 
export const autoClose: boolean = true;

// Durée avant autoClose :
export const autoCloseTime: number = 4000 ;
