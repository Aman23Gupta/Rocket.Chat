function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/mapBusinessHoursForm.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  mapBusinessHoursForm: () => mapBusinessHoursForm
});

const mapBusinessHoursForm = (formData, data) => {
  var _data$workHours;

  const {
    daysOpen,
    daysTime
  } = formData;
  return (_data$workHours = data.workHours) === null || _data$workHours === void 0 ? void 0 : _data$workHours.map(day => {
    const {
      day: currentDay,
      start: {
        time: start
      },
      finish: {
        time: finish
      }
    } = day;
    const open = daysOpen.includes(currentDay);

    if (daysTime[currentDay]) {
      const {
        start,
        finish
      } = daysTime[currentDay];
      return {
        day: currentDay,
        start,
        finish,
        open
      };
    }

    return {
      day: currentDay,
      start,
      finish,
      open
    };
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/47d49d31e1f432ee2f220445c289e06d5c568c07.map
