---
outline: deep
---

# HTTP

**HTTP** - Hypertext Transfer Protocol.

- Protocol - used to transfer HyperText.
- Protocol - set of rules.
- HyperText - Hyperlink Text.
- Hyperlink - Web Docs.

**Huaman Readable**
- Network tab visibility.
- Inspect Element.
- Page Source.

**State less Protocal**
- Everytime you visite a page, you are a new user.
- No memory of previous request.

**Session**
- Stored state b/w Frontend & Backend.

**Cookic**
- I need to send more info from Server to Browser.

**HTTP Headers**
- Client.
- Browser Info.
- Date Time.
- Ciikie to Store.

**Request Response Model**
- Type of Request [Get,Post,Delete...]
- Response Code [200,404,500.....]
  - What action to perform *get pot*
  - Where to perform *http://api.kuntal.ai/auth*
  - Was it done *200,400.....*

# HTTP/2
- http means http 2
  - http/1.1 is a fallback & is still used.
- Uses compression
- Use multiplexing (Many files at same time)
- Uses encryption (https)
  - In aws, we don't use https for internal communication.

---

- **User Agent** - (Browser).
- **TCP** - Transmission Control Protocol.
- **FTP** - File Transfer Protocol.
- **IP** - Internet Protocol.
- **TLS** - Transpost Layer Security.
- **URL** - Uniform Resource Locator.
- **DNS** - Domain Name System (Server).
  - Points URL to IP.
- **Header** - Pass additional information.
- **Payload** - Acual Data - email,password.
- **Cache** - Store the Data (Memory).

**Summary:**
- Setup TCP Connection.
- Exchange TLS Certificate.(HTTPS).
- Send verb + URL ---> Data + Header Info.
- Gets the response back with status code & Data (Inage,CSV,Text ).
- TCP Connection is closed (State less).