export function calculateTimeRemaining(endDateTime) {
    const endDate = new Date(endDateTime)
    const now = new Date()
    const timeRemaining = endDate - now

    if (timeRemaining > 0) {
        const days = Math.floor(
            timeRemaining / (1000 * 60 * 60 * 24)
        )
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        )
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        )
        return `${days}d, ${hours}h, ${minutes} m`
    }
    return 'Auction ended'
}
