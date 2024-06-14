import { ref } from "vue"

export const useAuth = ()=>{
  const emailDefault:string = 'user@test.com'
  const passwordDefault:string = 'password'

  const email= ref<string>('user@test.com')
  const password = ref<string>('password')
  
  const isAutenticated = (email:string,password:string):boolean=>{    
    if(email === emailDefault && password === passwordDefault) return true
    return false
  }
  return {
    email,
    password,
    isAutenticated
  }
}