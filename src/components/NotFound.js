import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link, Card, Flex, MaxPanel, Text, Icon } from '../design-system';

const NotFound = inject('app')(
  observer(({ location }) => (
    <MaxPanel centered>
      <Card p={4}>
        <Flex fontSize={9}>
          <Icon color="error" name="error" size={64} />
          <Text ml={2}>404 &mdash; not found</Text>
        </Flex>
        <Text>
          Can't find <code>{location.pathname}</code>.{' '}
          <Link display="block" to="/">
            Go home
          </Link>
        </Text>
      </Card>
    </MaxPanel>
  )),
);

export default NotFound;
