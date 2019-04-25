import React from 'react';
import { observer, inject } from 'mobx-react';
import { withTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import ScreenView from './ScreenView';
import {
  AdornedInputField,
  Box,
  Button,
  Card,
  Container,
  Flex,
  FlexPanel,
  Grid,
  Form,
  Heading,
  Heading2,
  Heading5,
  Icon,
  LabeledInput,
  FormField,
  IconButton,
  Image,
  InputField,
  Label,
  Link,
  Relative,
  Section,
  Select,
  Text,
  VideoPlayer,
} from '../design-system';
import uniqid from '../utils/uniqid';

const Home = inject('app')(
  observer(({ app, t }) => (
    <ScreenView screen="home">
      <Container borders={1}>
        <Section width="70%" mx="auto" mt={50}>
          <Heading2>
            <Icon name="chevron-right" size={48} mr={2} />
            {capitalize(t('greeting'))} from {app.appInfoString}
          </Heading2>
          <Text lineHeight="copy">
            Welcome to the app. This is some normal text. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco <Link to="/missing">laboris nisi</Link>{' '}
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Section>
            <Heading>Cards</Heading>
            <Card mx="auto" fontSize={3} maxWidth={640}>
              <Relative>
                <Image
                  borderRadius="0.25em 0.25em 0 0"
                  width="100%"
                  src="https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80"
                />
                <Text
                  position="absolute"
                  bottom=".25rem"
                  color="white"
                  width={1}
                  p={2}
                  bg="rgba(150,150,150,.5)"
                >
                  Photo by Steve Johnson
                </Text>
              </Relative>
              <Text p={2}>This painting could sell for $70 million.</Text>
            </Card>
          </Section>
          <Section>
            <Heading>Video</Heading>
            <VideoPlayer
              width={640}
              height={(640 * 9) / 16}
              borderRadius="sm"
              overflow="hidden"
              src="https://www.youtube.com/watch?v=nCVYEqc_Hw4"
            />
          </Section>
          <Section>
            <Heading>Fields</Heading>
            <FlexPanel maxWidth={640} alignItems="center">
              <Grid
                gridTemplateColumns="auto 1fr auto"
                gridGap={2}
                alignItems="center"
                mb={3}
              >
                <Label>Search:</Label>
                <InputField
                  width={1}
                  p={2}
                  name="search"
                  placeholder="type something..."
                  value={app.getFormValue('fields', 'search')}
                  onChange={value =>
                    app.setFormValue('fields', 'search', value)
                  }
                  borderRadius="sm"
                />
                <IconButton
                  name="search"
                  size={40}
                  ml={1}
                  p={1}
                  pr={2}
                  borderRadius="sm"
                />
              </Grid>
              <AdornedInputField
                labelPrimary
                iconSuccess
                inputPlaceholder="Enter a number"
                my={2}
                label="Amount:"
                icon="check"
                type="number"
                value={app.getFormValue('fields', 'amount')}
                onChange={value => app.setFormValue('fields', 'amount', value)}
              />
            </FlexPanel>
          </Section>
          <Section>
            <Heading>Buttons</Heading>
            <Flex flexWrap="wrap">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>
              <Button success>Success</Button>
              <Button warning>Warning</Button>
              <Button info>Info</Button>
              <Button error>Error</Button>
            </Flex>
          </Section>
          <Section>
            <Heading>Forms</Heading>
            <Form
              name="aform"
              p={4}
              pt={0}
              mb={2}
              boxShadow={2}
              bg="secondary"
              layout="horizontal"
            >
              <Heading5 gridColumn="1/3">My Form</Heading5>
              {['First Name', 'Last Name', 'Date of Birth', 'City'].map(
                label => (
                  <LabeledInput
                    key={uniqid()}
                    boxShadow={0}
                    border={1}
                    borderRadius="sm"
                    borderStyle="dotted"
                    value={app.getFormValue('aform', label)}
                    onChange={value => app.setFormValue('aform', label, value)}
                    label={`${label}:`}
                    gridColumn="2/3"
                    type={/date/i.test(label) ? 'date' : 'text'}
                    labelGridColumn="1/2"
                    labelJustifySelf="end"
                  />
                ),
              )}
              <Button primary gridColumn="2/3" py={2}>
                Submit
              </Button>
            </Form>
            <Form
              name="anotherForm"
              p={4}
              pt={0}
              my={2}
              boxShadow={2}
              bg="info"
              width="65%"
            >
              <Heading5 gridColumn="1/3">Another Form</Heading5>
              <FormField
                value={app.getFormValue('anotherForm', 'firstName')}
                onChange={value =>
                  app.setFormValue('anotherForm', 'firstName', value)
                }
                name="firstName"
                label="First Name"
              />
              <FormField
                name="gender"
                type="radio"
                value={app.getFormValue('anotherForm', 'gender')}
                options={[
                  { value: 'f', label: 'Female', icon: 'female' },
                  { value: 'm', label: 'Male', icon: 'male' },
                ]}
                label="Gender"
                onChange={value =>
                  app.setFormValue('anotherForm', 'gender', value)
                }
              />
              <FormField
                label="Color"
                type="select"
                onChange={value =>
                  app.setFormValue('anotherForm', 'color', value)
                }
                value={app.getFormValue('anotherForm', 'color')}
                options={[
                  { value: 'red', label: 'Red', iconColor: 'red' },
                  { value: 'green', label: 'Green', iconColor: 'green' },
                  { value: 'blue', label: 'Blue', iconColor: 'blue' },
                  { value: 'yellow', label: 'Yellow', iconColor: 'yellow' },
                ]}
              />
              <Flex gridColumn="1/3" justifyContent="space-between" py={2}>
                <Button secondary>Cancel</Button>
                <Button primary>OK</Button>
              </Flex>
            </Form>
          </Section>
          <Section mb={4}>
            <Heading>Selects</Heading>
            <Box width={300}>
              <Select
                options={[
                  {
                    icon: 'cog',
                    value: 1,
                    label: 'Settings',
                    iconColor: 'primary',
                  },
                  { value: 2, label: 'item 2', iconColor: 'red' },
                  { value: 3, label: 'item 3', iconColor: 'transparent' },
                ]}
              />
            </Box>
          </Section>
        </Section>
      </Container>
    </ScreenView>
  )),
);

export default withTranslation()(Home);
