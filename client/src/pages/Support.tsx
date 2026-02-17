import { FC, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Search,
  ExpandMore,
  ExpandLess,
  QuestionAnswer,
  Send,
} from '@mui/icons-material';

const BackgroundBox = styled(Box)({
  background: 'linear-gradient(135deg, #0B1340 0%, #1A237E 100%)',
  minHeight: '100vh',
  padding: '64px 0'
});

const StyledContainer = styled(Container)({
  position: 'relative'
});

const HeaderContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: 48
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: 16,
  fontWeight: 700
});

const SubtitleText = styled(Typography)({
  color: 'white',
  opacity: 0.8
});

const SearchContainer = styled(Box)({
  maxWidth: 600,
  margin: '0 auto',
  marginBottom: 48
});

const SearchField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9D4EDD'
    }
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});

const SupportCard = styled(Card)({
  background: 'rgba(11, 19, 64, 0.7)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(157, 78, 221, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(157, 78, 221, 0.15)'
  }
});

const CardTitle = styled(Typography)({
  color: '#FFFFFF',
  fontWeight: 600,
  marginBottom: 16
});

const FAQList = styled(List)({
  width: '100%'
});

const FAQItem = styled(ListItem)({
  padding: '12px 0',
  flexDirection: 'column',
  alignItems: 'flex-start'
});

const FAQQuestion = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#FFFFFF'
});

const FAQAnswer = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.7)',
  marginTop: 8,
  paddingLeft: 40
});

const ContactForm = styled(Box)({
  marginTop: 32
});

const FormField = styled(TextField)({
  marginBottom: 16,
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9D4EDD'
    }
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});

const SubmitButton = styled(Button)({
  background: 'linear-gradient(45deg, #9D4EDD, #00B4D8)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    background: 'linear-gradient(45deg, #8B44C4, #00A0C2)'
  }
});

const QuestionIcon = styled(QuestionAnswer)({
  color: '#9D4EDD'
});

const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I track my satellite?',
    answer: 'You can track your satellite through our Mission Control dashboard. Simply select your satellite from the list and view real-time tracking data.'
  },
  {
    question: 'What data formats are supported?',
    answer: 'We support various data formats including JSON, CSV, and custom API endpoints. Check our documentation for detailed specifications.'
  },
  {
    question: 'How often is the data updated?',
    answer: 'Data is updated in real-time for Pro and Enterprise plans. Basic plans receive updates every 15 minutes.'
  }
];

const SupportPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFaqClick = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', contactForm);
  };

  return (
    <BackgroundBox>
      <StyledContainer>
        <HeaderContainer>
          <GradientText variant="h3">
            Support Center
          </GradientText>
          <SubtitleText variant="h6">
            We're here to help you with any questions or concerns
          </SubtitleText>
        </HeaderContainer>

        <SearchContainer>
          <SearchField
            fullWidth
            label="Search for help"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search />
            }}
          />
        </SearchContainer>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SupportCard>
              <CardTitle variant="h5">
                Frequently Asked Questions
              </CardTitle>
              <FAQList>
                {faqs.map((faq, index) => (
                  <FAQItem key={index}>
                    <FAQQuestion onClick={() => handleFaqClick(index)}>
                      <IconContainer>
                        <ListItemIcon>
                          <QuestionIcon />
                        </ListItemIcon>
                        <ListItemText primary={faq.question} />
                      </IconContainer>
                      <IconButton>
                        {expandedFaq === index ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </FAQQuestion>
                    {expandedFaq === index && (
                      <FAQAnswer>
                        {faq.answer}
                      </FAQAnswer>
                    )}
                  </FAQItem>
                ))}
              </FAQList>
            </SupportCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <SupportCard>
              <CardTitle variant="h5">
                Contact Support
              </CardTitle>
              <ContactForm component="form" onSubmit={handleContactSubmit}>
                <FormField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <FormField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <FormField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
                <SubmitButton
                  type="submit"
                  fullWidth
                  endIcon={<Send />}
                >
                  Send Message
                </SubmitButton>
              </ContactForm>
            </SupportCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </BackgroundBox>
  );
};

export default SupportPage;
