import { toast as t } from 'react-toastify';

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface IToast {
  success: (message: string, position?: ToastPosition) => void;
  error: (message: string, position?: ToastPosition) => void;
  warning: (message: string, position?: ToastPosition) => void;
  info: (message: string, position?: ToastPosition) => void;
}

export const notify: IToast = {
  success: (message: string, position: ToastPosition = 'bottom-right') =>
    t.success(message, { position, autoClose: 1000 }),
  error: (message: string, position: ToastPosition = 'bottom-right') =>
    t.error(message, { position, autoClose: 2500 }),
  warning: (message: string, position: ToastPosition = 'bottom-right') =>
    t.warning(message, { position, autoClose: 2000 }),
  info: (message: string, position: ToastPosition = 'bottom-right') =>
    t.info(message, { position, autoClose: 1500 }),
};
