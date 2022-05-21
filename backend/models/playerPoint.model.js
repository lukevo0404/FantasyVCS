const playerPoint = [
    { $match : {}},
    { $group : { _id: '$playerId', total: { $sum: '$point' } } },
]