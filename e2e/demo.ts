// eslint-disable-next-line no-unused-vars
import { Selector } from 'testcafe';
import SharpCom from './pages/SharpCom';

fixture `Open Sharp.com Home Page`
  .page `https://sharp.com`
  .meta('e2e', 'reg');

test
  .meta('testID', '1')('Go to the sharpCom page and verify page title', async (t) => {
    await t.expect(SharpCom.title.innerText).eql('Top San Diego Hospitals and Doctors - Sharp HealthCare');
  });

test('Find a Doctor Nav menu redirects to Page with 3 Active buttons/options', async (t) => {
  await t.click(SharpCom.findAdoctorMenu);
  await t.expect(SharpCom.threeFindOptions.count).eql(3);
});
