import { useState, useEffect } from 'react';

export default function Notification() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');

  useEffect(() => {
    window.notify = (msg, t = 'success') => {
      setMessage(msg);
      setType(t);
      setTimeout(() => setMessage(''), 4000);
    };
  }, []);

  if (!message) return null;

  return (
    <div className={`notification ${type} show`}>
      <p>{message}</p>
    </div>
  );
}