function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/mapBusinessHoursForm.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  mapBusinessHoursForm: function () {
    return mapBusinessHoursForm;
  }
});

var mapBusinessHoursForm = function (formData, data) {
  var _data$workHours;

  var daysOpen = formData.daysOpen,
      daysTime = formData.daysTime;
  return (_data$workHours = data.workHours) === null || _data$workHours === void 0 ? void 0 : _data$workHours.map(function (day) {
    var currentDay = day.day,
        start = day.start.time,
        finish = day.finish.time;
    var open = daysOpen.includes(currentDay);

    if (daysTime[currentDay]) {
      var _daysTime$currentDay = daysTime[currentDay],
          _start = _daysTime$currentDay.start,
          _finish = _daysTime$currentDay.finish;
      return {
        day: currentDay,
        start: _start,
        finish: _finish,
        open: open
      };
    }

    return {
      day: currentDay,
      start: start,
      finish: finish,
      open: open
    };
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/9e589a8ccba3e1bf0b9c58a5bcb0d4a99fff8a78.map
