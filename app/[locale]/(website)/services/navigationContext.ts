import { useContext, createContext, Dispatch, SetStateAction } from 'react';
import { OutOfContext } from '@/app/utils/OutOfContext';

type Props = {
 headerIsVisible: boolean;
 xlargeDevice: boolean;
 showDesktopNav: boolean;
};
type Actions = {
 setShowDesktopNav: Dispatch<SetStateAction<boolean>>;
};

const navigationContext = createContext<(Props & Actions) | null>(null);

const useNavigationContext = () => {
 const value = useContext(navigationContext);
 if (!value) throw new OutOfContext();
 return value;
};

export { type Props, type Actions, navigationContext, useNavigationContext };
