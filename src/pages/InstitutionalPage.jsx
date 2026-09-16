import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InstitutionalPage as InstitutionalComponent } from './InstitutionalContent';

export function InstitutionalPage({ pageKey }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const activeSlug = slug || pageKey || 'the-institute';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <InstitutionalComponent 
      pageKey={activeSlug}
      onNavigate={(newSlug) => navigate(`/page/${newSlug}`)}
      onBack={() => navigate('/')}
    />
  );
}

export default InstitutionalPage;

