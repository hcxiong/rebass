
import React from 'react'
import { compose, withState } from 'recompose'
import {
  Base,
  Arrow,
  AspectRatio,
  Avatar,
  Badge,
  Banner,
  Bar,
  Block,
  Blockquote,
  Button,
  ButtonCircle,
  ButtonOutline,
  Card,
  CardImage,
  Carousel,
  Checkbox,
  Circle,
  Close,
  Code,
  Container,
  Divider,
  DotIndicator,
  Drawer,
  Dropdown,
  DropdownMenu,
  Embed,
  Fixed,
  Footer,
  Group,
  Heading,
  HeadingLink,
  Input,
  InlineForm,
  Label,
  LinkBlock,
  List,
  Media,
  Menu,
  Message,
  NavItem,
  Overlay,
  PageHeader,
  Panel,
  PanelHeader,
  PanelFooter,
  Pre,
  Progress,
  Radio,
  Text,
} from 'rebass'

const App = ({
  drawerOpen,
  setDrawerOpen,
  dropdownOpen,
  setDropdownOpen,
  overlayOpen,
  setOverlayOpen
}) => (
  <div id='app'>
    <Banner backgroundImage='https://images.unsplash.com/photo-1459909633680-206dc5c67abb?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop='>
      <Heading level={1} size={0}>Rebass</Heading>
      <DotIndicator
        active={1}
      />
    </Banner>
    <Container p3 id='heading-link'>
      <PageHeader
        heading='Hello'
        description='PageHeader'
      />
      <Message>
        Hello Message
      </Message>
      <HeadingLink
        href='#heading-link'
        children='HeadingLink' />
      <div>
        Hello
        <Circle>C</Circle>
        <Badge>Badge</Badge>
        <Code>Code</Code>
      </div>
      <Divider />
      <LinkBlock href='http://jxnblk.com/rebass'>
        <Card width={256}>
          <CardImage
            src='http://placehold.it/256' />
          <Base
            p2
            white
            bgGreen>
            Base
            <Arrow />
            <Arrow direction='up' />
            <Close onClick={e => alert('close me')} />
          </Base>
          <Checkbox>
            Hello
          </Checkbox>
          <Checkbox checked>
            Hello
          </Checkbox>
          <Radio checked>
            Hello Radio
          </Radio>
        </Card>
      </LinkBlock>
      <Block p2>
        <Bar value={1/2}>Bar</Bar>
        <Bar value={3/4}>Bar</Bar>
      </Block>
      <Media img='http://placehold.it/128'
        align='center'>
        Media Object
      </Media>
      <Panel>
        <PanelHeader>PanelHeader</PanelHeader>
        Hello Panel
        <PanelFooter>PanelFooter</PanelFooter>
      </Panel>
      <Blockquote>
        “If one says ‘Red’ (the name of the color) and there are 50 people listening, it can be expected that there will be 50 reds in their minds. And one can be sure that all these reds will be very different.”
      </Blockquote>
      <List>
        <li>One</li>
        <span>Two</span>
        <span>Three</span>
      </List>
      <Divider />
      <Dropdown display='inline-block'>
        <Button onClick={e => setDropdownOpen(!dropdownOpen)}>
          Dropdown <Arrow />
        </Button>
        <DropdownMenu
          onDismiss={e => setDropdownOpen(false)}
          open={dropdownOpen}>
          DropdownMenu
        </DropdownMenu>
      </Dropdown>
      <Divider />
      <Menu>
        <NavItem href='http://jxnblk.com/rebass'>Hello Menu</NavItem>
        <NavItem href='#!'>NavItem Two</NavItem>
        <NavItem href='#!'>NavItem Three</NavItem>
      </Menu>
      <Avatar src='http://jxnblk.com/avatar/avatar-640.png' />
      {/*
      <AspectRatio bgOrange>AspectRatio</AspectRatio>
      */}

      <Label>Label</Label>
      <Button
        href='http://jxnblk.com'
        children='Beep' />
      <ButtonOutline
        href='http://jxnblk.com'
        children='Beep' />
      <ButtonOutline
        href='http://jxnblk.com'
        children='Boop' />
      <Divider />
      <Button
        onClick={e => { setDrawerOpen(!drawerOpen) }}
        children='Toggle Drawer'
      />
      <Button
        onClick={e => { setOverlayOpen(!overlayOpen) }}
        children='Toggle Overlay'
      />
      <Divider />
      <Group mb3>
        <Input defaultValue='Beep' />
        <Button children='Beep' />
        <ButtonOutline children='Boop' />
      </Group>
      <InlineForm />
      <Embed>
        <iframe
          src='https://www.youtube.com/embed/BoEKWtgJQAU'
          allowFullScreen />
      </Embed>
      <Pre>This is preformatted text</Pre>
      <Progress value={1/3} color='blue' />
      <Footer>
        Footer
      </Footer>
    </Container>
    <Drawer
      open={drawerOpen}
      backgroundColor='red'
      onDismiss={e => { setDrawerOpen(!drawerOpen) }}>
      Hello Drawer
    </Drawer>
    <Overlay
      dark
      open={overlayOpen}
      onDismiss={e => { console.log('close'); setOverlayOpen(false) }}
    >
      <Panel>
        <PanelHeader children='Hello' />
        Overlay
      </Panel>
    </Overlay>
  </div>
)

const withDrawer = withState('drawerOpen', 'setDrawerOpen', false)
const withDropdown = withState('dropdownOpen', 'setDropdownOpen', false)
const withOverlay = withState('overlayOpen', 'setOverlayOpen', false)

const enhance = compose(
  withDrawer,
  withDropdown,
  withOverlay
)

export default enhance(App)

