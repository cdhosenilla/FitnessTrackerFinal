import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0A2342',
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15%',
    color: 'white',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 7,
    marginTop: 20,
    color: 'white',
  },
  inputContainerPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 1,
  },

  forgotPasswordText: {
    color: '#ffc145', // or any color you prefer
    marginTop: 10,
    textAlign: 'center', // center the text if needed
  },

  inputContainerConPass: {
    flexDirection:'row' ,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 1,
  },

  input: {
    flex: 1,
    height: 50,
    padding: 10,
    fontSize: 16,
    color: 'white',
  },

  inputEmail: {
    flex: 1,              
    borderWidth: 1,
    maxHeight: 50,
    minHeight: 50,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    color: 'white',     
  },

  eyeIcon: {
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  GuestButton: {
    backgroundColor: '#D2D2D2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,

  },

  signUpButton: {
    backgroundColor: '#ffc145',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  GuestText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  orContinue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  orContinueText: {
    marginHorizontal: 10,
    color: '#ccc',
    fontSize: 14,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButtonGoogle: {
    backgroundColor: '#3b5998',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },

  socialButtonfb: {
    backgroundColor: '#3b5998',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  signInSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  alreadyText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  signInText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffc145',
    textAlign:'center',
    

  },
});