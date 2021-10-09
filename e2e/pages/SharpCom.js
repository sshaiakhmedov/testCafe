import { Selector } from 'testcafe';
import xpathSelector from '../../xpath-selector';

class SharpCom {
  constructor() {
    this.title = Selector('title');
    this.findAdoctorMenu = Selector('#header-nav-fad');
    this.threeFindOptions = xpathSelector('//span[contains(text(),"Find")]');
  }
}

export default new SharpCom();
