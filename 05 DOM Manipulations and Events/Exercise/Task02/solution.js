function attachEventsListeners() {
    const daysField = document.getElementById('days');
    const hoursField = document.getElementById('hours');
    const minutesField = document.getElementById('minutes');
    const secondsField = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => convert(daysField.value * 86400));
    document.getElementById('hoursBtn').addEventListener('click', () => convert(hoursField.value * 3600));
    document.getElementById('minutesBtn').addEventListener('click', () => convert(minutesField.value * 60));
    document.getElementById('secondsBtn').addEventListener('click', () => convert(secondsField.value));

    function convert(seconds) {
      secondsField.value = seconds;
      minutesField.value = seconds / 60;
      hoursField.value = seconds / 3600;
      daysField.value = seconds / 86400;
    }
  }