function updateTimer() {
  const now = new Date()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  // Determine if we're in a work period (0-25) or break period (25-30)
  const halfHour = minutes % 30
  const isWorkPeriod = halfHour < 25

  // Calculate time remaining
  let timeLeft
  if (isWorkPeriod) {
    timeLeft = (25 - halfHour) * 60 - seconds
  } else {
    timeLeft = (30 - halfHour) * 60 - seconds
  }

  // Format as MM:SS
  const displayMinutes = Math.floor(timeLeft / 60)
  const displaySeconds = timeLeft % 60

  document.getElementById('timer').textContent = `${displayMinutes}:${displaySeconds.toString().padStart(2, '0')}`

  // Check for period transitions
  if (timeLeft <= 1) {
    if (document.getElementById('sound-enabled').checked) {
      new Audio(
        'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRQ0PVqzn77BdGAg+ltryxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEgODlOq5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYr+ftrVoXCECY3PLEcSYELIHO8diJOQcZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRQ0PVqzl77BeGQc9ltvyxnUoBSh+zPDaizsIGGS56+mjTxELTKXh8bllHgU1jdT0z3wvBSJ0xe/glEILElyx6OyrWRUIRJve8sFuJAUug8/z1YU2BRxqvu3mnEgODlOq5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccPu45ZFDBFYr+ftrVwWCECY3PLEcSYGK4DN8tiIOQcZZ7zs56BODwxPpuPxtmQcBjiP1/PMeS0FI3fH8N+RQAoUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQGHm/A7eSaRQ0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF0xPDglEQKElux6eyrWRUJQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgODlKp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVhtuvqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYrufur1sYB0CY3PLEcSYGK4DN8tiIOQcZZ7zs56BODwxPpuPxtmQcBjiP1/PMeS0FI3bH8d+RQQkUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQGHm3A7eSaRwoNVqzl77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF0xPDglEQKElux6eyrWRUJQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgODlKp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVhtuvqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYrufur1sYB0CY3PLEcSYGK4DN8tiIOQcZZ7zs56BODwxPpuPxtmQcBjiP1/PMeS0FI3bH8d+RQQkUXrPp66hWEwlGnt/yv2wiBDCG0fPTgzQGHm3A7eSaRwoNVqzl77BeGQc9ldrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF0xPDglEQKElux6eyrWRUJQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgODlKp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVhtuvqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYrufur1sYB0CY3PLEcSYGK4DN8tiIOQcZZ7zs56BODwxPpuPxtmQcBjiP1/PMeS0FI3bH8d+RQQkUXrPp66hWEwlGnt/yv2wiBDCG0fPTgzQGHm3A7eSaRwoNVqzl77BeGQc9ldrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF0xPDglEQKElux6eyrWRUJQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgODlKp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVhtuvqpVMSC0mh4PK8aiAFMw==',
      ).play()
    }

    if (Notification.permission === 'granted') {
      new Notification(isWorkPeriod ? 'Time for a break!' : 'Break is over!')
    }
  }
}

// Request notification permission
if ('Notification' in window) {
  Notification.requestPermission()
}

// Update immediately and every second
updateTimer()
setInterval(updateTimer, 1000)
