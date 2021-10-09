import { Typography } from '@mui/material';

export default function LandingPage() {
    return (
        <div>
            <Typography style={{ paddingTop: '20px' }} variant="h1">
                {' '}
                PSA Cargo Management System{' '}
            </Typography>
            <iframe
                title="form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSc1cOndSu7q1fwPTDH_dlm7fcBHtq5HfAigfNY826Z-NFT2BA/viewform?embedded=true"
                width="640"
                height="1000"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            >
                Loading…
            </iframe>
        </div>
    );
}
