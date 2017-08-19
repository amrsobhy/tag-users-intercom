# payment
send messages to users who fail to re-subscribe because of processor declined

##install
``` npm install ```


##usage

```
//send an in app message 
node index.js userid inapp

```

```
//send an email message 

node index.js userid email
```


```
//send both an email message and an inapp message

node index.js userid 
```


```

//send a final warning before account deactivation inapp + email always 
node index.js userid last 

```

# tag-users-intercom
