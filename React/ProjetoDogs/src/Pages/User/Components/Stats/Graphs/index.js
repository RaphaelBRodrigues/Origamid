import React from 'react';
import style from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: item.acessos,
      };
    });
    setGraph(graphData);

    const result = data.reduce((sum, item) => {
      return Number(sum + item.acessos);
    }, 0);
    setTotal(result);
  }, []);

  return (
    <section className={`animeLeft ${style.graph}`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryPie
          innerRadius="99"
          data={graph}
          paddding={{
            top: 20,
            bottom: 20,
            left: 80,
            right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            label: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start" />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
