import React from 'react';
import SectionTitle from './SectionTitle';
import TimelineItem from './TimelineItem.jsx';

const Timeline = ({ timelineData = [] }) => {
  return (
    <section className="section timeline">
      <SectionTitle title="Timeline" />
      <div className="section-center timeline-center">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            description={item.description}
            number={item.number}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;