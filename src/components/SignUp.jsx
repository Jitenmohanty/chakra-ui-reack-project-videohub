import {
    Avatar,
    Button,
    Center,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'2'} mt={'5'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textAlign={'center'}>QUICK VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
                border={'2px solid grey'}
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
            border={'2px solid grey'}
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
            border={'2px solid grey'}
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text mr={['1','0']} textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;