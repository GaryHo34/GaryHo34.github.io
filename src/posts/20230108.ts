import { Post } from "types";

export const _20230108_: Post = {
    id: 1,
    date: '2023-01-08',
    title: "Mongoose && Bcrypt",
    content: `
# Bcrypt
[security - How can bcrypt have built-in salts? - Stack Overflow](https://stackoverflow.com/questions/6832445/how-can-bcrypt-have-built-in-salts)
[Salt and Hash Passwords with bcrypt](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/)

## Bcrypt
[bcrypt - Wikiwand](https://www.wikiwand.com/en/Bcrypt)

## Bcrypt (npm package)
### To hash a password:
----
- Technique 1 (generate a salt and hash on separate function calls):

\`\`\`js
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
\`\`\`

- Technique 2 (auto-gen a salt and hash):

\`\`\`js
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
\`\`\`

Note that both techniques achieve the same end-result.

## Mongoose with Bcrypt as Middleware
[Mongoose v6.5.2: Middleware (mongoosejs.com)](https://mongoosejs.com/docs/middleware.html)

### Pre
---
Pre middleware functions are executed one after another, when each middleware calls \`next\`.

\`\`\`javascript
const schema = new Schema(..);
schema.pre('save', function(next) {
    // do stuff
    next();
});
\`\`\`

we can do:
\`\`\`javascript
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
\`\`\`
    
`,
}
