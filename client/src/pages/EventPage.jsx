import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import Hero from '../components/Hero';
import EventOverview from '../components/EventOverview';
import WhoWillMeet from '../components/WhoWillMeet';
import TopicHighlights from '../components/TopicHighlights';
import WhyAttend from '../components/WhyAttend';
import WhySponsor from '../components/WhySponsor';
import ContactForm from '../components/ContactForm';
import WorkplaceCasualtiesDashboard from '../components/WorkplaceCasualtiesDashboard';

const EventPage = () => {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-0">
      <Hero event={event} />
      <EventOverview event={event} />
      <WhoWillMeet event={event} />
      <TopicHighlights event={event} />
      <WhyAttend event={event} />
      <WorkplaceCasualtiesDashboard></WorkplaceCasualtiesDashboard>
      <WhySponsor />
      <ContactForm />
    </div>
  );
};

export default EventPage;