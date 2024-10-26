'use client';

import React, { useState, useEffect } from 'react';
import Loading from '../loading';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return <Loading/>;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;
