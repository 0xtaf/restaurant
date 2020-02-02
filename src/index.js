import firstLoad from './pageload';
import btnHomeFunc from './btnHome';
import btnContactFunc from './btnContact';
import btnMenuFunc from './btnMenu';




firstLoad.btnHome.addEventListener('click', btnHomeFunc);
firstLoad.btnMenu.addEventListener('click', btnMenuFunc);
firstLoad.btnContact.addEventListener('click', btnContactFunc);
