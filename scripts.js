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
  
  document.getElementById('timer').textContent = 
    `${displayMinutes}:${displaySeconds.toString().padStart(2, '0')}`
}

// Update immediately and every second
updateTimer()
setInterval(updateTimer, 1000)
