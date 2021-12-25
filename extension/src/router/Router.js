import { useContext } from 'react';
import RouterContext from './RouterContext';

function useRouter() {

    const router = useContext(RouterContext);
    return router;

}

export default useRouter;