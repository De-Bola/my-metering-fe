import React, { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";
import { getMarketPrice } from "../services/MarketPriceService";

const MarketPriceGraph = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  var startDate = new Date("2023-01-01T00:00:00Z").toISOString();
  var endDate = new Date("2023-01-02T00:00:00Z").toISOString();

  // Fetch data from the backend proxy endpoint
  const transformAggregatedData = () => {
    const seriesCents = {
      name: 'Avg Cents Per kWh',
      type: 'line',
      data: dataPoints.map(dp => [new Date(dp.fromDateTime).getTime(), dp.centsPerKwh]),
    };

    const seriesEuros = {
      name: 'Avg Euros Per MWh',
      type: 'line',
      data: dataPoints.map(dp => [new Date(dp.fromDateTime).getTime(), dp.eurPerMwh]),
    };

    return [seriesCents, seriesEuros];
  };

  const option = {
    title: {
      text: 'Monthly Market Prices',
    },
    tooltip: {
      trigger: 'axis',
      formatter: params => {
        // Use the first series' timestamp as the date (all series share same x values)
        const date = new Date(params[0].data[0]).toLocaleDateString();
        let tooltipText = `${date}<br/>`;
        params.forEach(param => {
          tooltipText += `${param.seriesName}: ${param.data[1].toFixed(2)}<br/>`;
        });
        return tooltipText;
      },
    },
    legend: {
      data: ['Avg Cents Per kWh', 'Avg Euros Per MWh'],
    },
    xAxis: {
      type: 'time',
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      splitLine: { show: true },
    },
    series: transformAggregatedData(),
  };

  if (loading) {
    return <div>Loading aggregated market price data...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Monthly Market Prices</h2>
      <EChartsReact option={option} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default MarketPriceGraph;
