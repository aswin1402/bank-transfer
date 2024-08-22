function log(){
    window.location="./login.html"
    }
    function reg(){
        window.location="./registration.html"
        }

function registration(){
    acno=accno.value
    username=username.value
    password=pass.value
     console.log(acno,username,password);
      accountDetails={
        acno,
        username,
        password,
        balance:0
      }
     if(acno in localStorage){
        alert("Account already exists")
     }
     else{
        localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert("Account created successfully")
        window.location="./login.html"
     }
     }

     function login(){
        acno=log_acno.value
        password=log_pass.value
        console.log(acno,password);
        if(acno in localStorage){
            accountDetails=JSON.parse(localStorage.getItem(acno))
            if(password==accountDetails.password){
                alert("Login successful")
                window.location="./dashboard.html";
            }
            else{
                alert("Incorrect password")
            }
        }
            else{
                alert("Account does not exist")
            }
        

        
     }
     let amnt=0;
     let withdraw=0;
     let totalBalance=0;
     function deposite(){
        acno=deposit_acno.value
        amnt=deposit_amt.value
       amnt=Math.floor(amnt);
       
        if(acno in localStorage){
            accountDetails=JSON.parse(localStorage.getItem(acno));
            if(acno==accountDetails.acno && amnt <=0){
                alert("Invalid amount")
            }
            else{
                accountDetails.balance+=amnt;
                localStorage.setItem(acno,JSON.stringify(accountDetails))
                alert("Deposited successfully")
                document.getElementById("balance_amt").innerHTML=`<div style="color:green;"font-weight:800">your current Balance ${accountDetails.balance}</div>`;
                }

            }
            else{
                alert("Account does not exist")
            }
        }
        function Withdraw(){
            withdraw=withdraw_amnt.value;
            acno=withdraw_acno.value;
            withdraw= Math.floor(withdraw);
            
            if(acno in localStorage){
                accountDetails=JSON.parse(localStorage.getItem(acno));
                if(acno==accountDetails.acno && withdraw <= 0){
                    alert("Please enter the amount")
                } else if ( withdraw > accountDetails.balance){
                    alert("Insufficient funds...!")
                } else{
                    alert("Bank Balance before withdrawal: " + accountDetails.balance)
        
                    alert("withdrawal amount: " + withdraw)
        
                    accountDetails.balance -= withdraw;
                    alert("Your amount is  successfully withdrawn")
                    localStorage.setItem(acno, JSON.stringify(accountDetails));
                    
                  
                    alert("After withdrawal balance : " + accountDetails.balance) 
                    document.getElementById("Withdraw_amt").innerHTML=`<div class="text-dark" style="font-weight:800">Your Current Balance ${accountDetails.balance} </div>`
             
                }
            } else{
                alert("Incorrect Password");
            }
           
        }
        function logout() {
           localStorage.clear()
            window.location="./index.html";
        }

            
        
     