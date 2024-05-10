export function calculateTimeRemaining(endDateTime) {
    const endDate = new Date(endDateTime)
    const now = new Date()
    const timeRemaining = endDate - now

    if (timeRemaining <= 0) {
        return 'Auction ended'
    }

    const timeUnits = {
        day: 1000 * 60 * 60 * 24,
        hour: 1000 * 60 * 60,
        minute: 1000 * 60,
    }

    const days = Math.floor(timeRemaining / timeUnits.day)
    const hours = Math.floor(
        (timeRemaining % timeUnits.day) / timeUnits.hour
    )
    const minutes = Math.floor(
        (timeRemaining % timeUnits.hour) / timeUnits.minute
    )

    return `${days}d, ${hours}h, ${minutes}m`
}
