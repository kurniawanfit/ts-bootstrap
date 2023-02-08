import tracer from 'dd-trace';
if (process.env.NODE_ENV === 'production') {
  tracer.init({
    analytics: true,
    service: process.env.SERVICE_NAME
  });
}
export default tracer;
