const token = ''; // token
const tgBotUrl = 'https://api.telegram.org/bot' + token;
const hookUrl = ''; // script

const message = `Тут ви можете дізнатись про втрати ворога.\n\n/all - Загальні втрати русні\n/today - Втрати русні за останній день` +
    `\n\nЄ ідеї? Пиши -> @YevheniiLi.`;

function getAll() {
  var url = 'https://russianwarship.rip/api/v1/statistics/latest';
  var response = UrlFetchApp.fetch(url, {"muteHttpExceptions": true});

  if (response.getResponseCode() == 200) {
    var data = JSON.parse(response.getContentText()).data;
    
    var personnelUnits = data.stats.personnel_units;
    const tanks = data.stats.tanks;
        const planes = data.stats.planes;
        const helicopters = data.stats.helicopters;
        const armoured_fighting_vehicles = data.stats.armoured_fighting_vehicles;
        const artillery_systems = data.stats.artillery_systems;
        const uav_systems = data.stats.uav_systems;
        const mlrs = data.stats.mlrs;
        const aa_warfare_systems  = data.stats.aa_warfare_systems;
        const warships_cutters  = data.stats.warships_cutters;
        const cruise_missiles  = data.stats.cruise_missiles;
        const vehicles_fuel_tanks  = data.stats.vehicles_fuel_tanks;
        


        const personnelUnitsPlus = data.increase.personnel_units;
        const tanksPlus = data.increase.tanks;
        const planesPlus = data.increase.planes;
        const helicoptersPlus = data.increase.helicopters;
        const armoured_fighting_vehiclesPlus = data.increase.armoured_fighting_vehicles;
        const artillery_systemsPlus = data.increase.artillery_systems;
        const uav_systemsPlus = data.increase.uav_systems;
        const mlrsPlus = data.increase.mlrs;
        const aa_warfare_systemsPlus = data.increase.aa_warfare_systems;
        const warships_cuttersPlus = data.increase.warships_cutters;
        const cruise_missilesPlus  = data.increase.cruise_missiles;
        const vehicles_fuel_tanksPlus  = data.increase.vehicles_fuel_tanks;

    var message = `<b>Загальні втрати русні</b>\n\n🪖 Особовий склад: <b>${personnelUnits} + (${personnelUnitsPlus})</b>\n` +
        `💥 Танки: <b> ${tanks} + (${tanksPlus})</b>\n` +
        `💥 Автомобільні техніки і цистерн з паливо: <b> ${vehicles_fuel_tanks} + (${vehicles_fuel_tanksPlus})</b>\n` +
        `💥 Реактивні системи залпового вогню: <b> ${mlrs} + (${mlrsPlus})</b>\n` +
        //`💥 Бойові кораблі/катери: <b> ${warships_cutters} + (${warships_cuttersPlus})</b>\n` +
        //`💥 Засоби протиповітряної оборони: <b> ${aa_warfare_systems} + (${aa_warfare_systemsPlus})</b>\n` +
        `💥 Бойові броньовані машини: <b> ${armoured_fighting_vehicles} + (${armoured_fighting_vehiclesPlus})</b>\n` +
        `💥 БПЛА: <b> ${uav_systems} + (${uav_systemsPlus})</b>\n` +
        `💥 Крилатих ракет: <b> ${cruise_missiles} + (${cruise_missilesPlus})</b>\n` +
        `💥 Артилерійські системи: <b> ${artillery_systems} + (${artillery_systemsPlus})</b>\n` +
        `🛩 Літаки: <b>${planes} + (${planesPlus})</b>\n` +
        `🚁 Гелікоптери: <b>${helicopters} + (${helicoptersPlus})</b>\n\n<b>Слава Збройним Силам України!</b>`;

    return message;
  } else {
    return 'Error fetching data. Please try again later.';
  }
}

function getToday() {
  var url = 'https://russianwarship.rip/api/v2/statistics/latest';
  var response = UrlFetchApp.fetch(url, {"muteHttpExceptions": true});

  if (response.getResponseCode() == 200) {
    var data = JSON.parse(response.getContentText()).data;
    
    const personnelUnitsPlus = data.increase.personnel_units;
        const tanksPlus = data.increase.tanks;
        const planesPlus = data.increase.planes;
        const helicoptersPlus = data.increase.helicopters;
        const armoured_fighting_vehiclesPlus = data.increase.armoured_fighting_vehicles;
        const artillery_systemsPlus = data.increase.artillery_systems;
        const uav_systemsPlus = data.increase.uav_systems;
        const mlrsPlus = data.increase.mlrs;
        const aa_warfare_systemsPlus = data.increase.aa_warfare_systems;
        const warships_cuttersPlus = data.increase.warships_cutters;
        const cruise_missilesPlus  = data.increase.cruise_missiles;
        const vehicles_fuel_tanksPlus  = data.increase.vehicles_fuel_tanks;

    var message = `<b>Втрати русні за останній день</b>\n\n🪖 Особовий склад: <b>${personnelUnitsPlus}</b>\n` +
        `💥 Танки: <b> ${tanksPlus}</b>\n` +
        `💥 Автомобільні техніки і цистерн з паливо: <b> ${vehicles_fuel_tanksPlus}</b>\n` +
        `💥 Реактивні системи залпового вогню: <b> ${mlrsPlus}</b>\n` +
        //`💥 Бойові кораблі/катери: <b> ${warships_cuttersPlus}</b>\n` +
        //`💥 Засоби протиповітряної оборони: <b> ${aa_warfare_systemsPlus}</b>\n` +
        `💥 Бойові броньовані машини: <b> ${armoured_fighting_vehiclesPlus}</b>\n` +
        `💥 БПЛА: <b> ${uav_systemsPlus}</b>\n` +
        `💥 Крилатих ракет: <b> ${cruise_missilesPlus}</b>\n` +
        `💥 Артилерійські системи: <b> ${artillery_systemsPlus}</b>\n` +
        `🛩 Літаки: <b> ${planesPlus}</b>\n` +
        `🚁 Гелікоптери: <b> ${helicoptersPlus}</b>\n\n<b>Хороший росіянин - мертвий росіянин</b>`;

    return message;
  } else {
    return 'Error fetching data. Please try again later.';
  }
}

var command  = {
  "/start": message,
  "/all" : getAll,  // без виклику getAll()
  "/today@EnemyLossTracker_bot": getToday,
  "/all@EnemyLossTracker_bot":  getAll,
  "/today" : getToday
}

// set webhook
function setWebhook(){
  var url = tgBotUrl + "/setwebhook?url="+hookUrl;
  var res = UrlFetchApp.fetch(url).getContentText();
  Logger.log(res);
}




// handle webhook
function doPost(e) {
  var webhookData = JSON.parse(e.postData.contents);
  var from = webhookData.message.chat.id;
  var text = webhookData.message.text;

  if (command.hasOwnProperty(text)) {
    var result = typeof command[text] === 'function' ? command[text]() : command[text];
    var sendText = encodeURIComponent(result);
    var url  = tgBotUrl + "/sendmessage?parse_mode=HTML&chat_id=" + from + "&text=" + sendText;
    var opts = {"muteHttpExceptions": true};

    UrlFetchApp.fetch(url, opts).getContentText();
  }
}

function getWebHook() {
  let response = UrlFetchApp.fetch(tgBotUrl + "/getWebhookInfo");
  if (response.getResponseCode() == 200) {
    let data = JSON.parse(response.getContentText())
    Logger.log('current webhook ur is ' + data.result.url);
  } else {
    Logger.log('telegram response status is ' + response.getResponseCode());
  }
}
function doGet(e){
  return ContentService.createTextOutput("Method GET not allowed");
}
