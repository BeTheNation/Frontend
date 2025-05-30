const COUNTRY_STATUS = {
    ACTIVE: 'ACTIVE',
    COMING_SOON: 'COMING SOON'
};

const CARD_METRICS = {
    metricId: '',
    code: '',
    name: '',
    flag: '',
    countryScore: 'COMING SOON',
    volume24h: 'COMING SOON',
    indexPrice: 'COMING SOON',
    changePercent: '0.0'
};

const TRADE_METRICS = {
    metricId: '',
    code: '',
    name: '',
    flag: '',
    about: '',
    tradingMetrics: {
        countryScore: 'COMING SOON',
        openTrades: 'COMING SOON',
        volume24h: 'COMING SOON',
        fundingCooldown: 'COMING SOON'
    },
    marketInfo: {
        indexPrice: 'COMING SOON',
        sentiment: 'Neutral',
        trend: 'neutral',
        markPrice: 'COMING SOON',
        fundingRate: 'COMING SOON',
        openInterest: 'COMING SOON',
        liquidationPrice: 'COMING SOON'
    }
};

module.exports = { 
    COUNTRY_STATUS, 
    CARD_METRICS, 
    TRADE_METRICS 
};
