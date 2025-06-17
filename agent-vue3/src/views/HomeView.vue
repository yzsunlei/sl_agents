<script setup>
import { ref } from 'vue';
import Chat from '../components/chat/index.vue';
import Messages from '../components/messages/index.vue';

const chatMessages = ref();
const messages = ref([
  {  message: '你好！你是谁？', sender: 'user', type: 'text' },
  {  message: '我是一个集成字节-扣子、百度-文心、清华-智谱等多家智能体平台的Agent工具，我可以调用多平台的Agent API，并支持解析Markdown、表格、图表、PPT等多种格式内容。如果你有任何问题或需要帮助，尽管问我吧！', sender: 'agent', type: 'text' }
]);

const onSendMessage = (message) => {
  messages.value.push({
    sender: 'user',
    type: 'text',
    message: message
  })
  setTimeout(() => {
    scrollMessageToBottom();   
  }, 1000);
};

const onPostAnswer = (contents) => {
  messages.value.push({
    sender: 'agent',
    type: contents?.[0]?.dataType || 'text',
    message: contents?.[0]?.text
  })
  setTimeout(() => {
    scrollMessageToBottom();   
  }, 1000);
}

const onPostConversation = (contents) => {
  const lastMessage = messages.value[messages.value.length - 1];
  if (lastMessage.sender === 'user') {
      messages.value.push({
        sender: 'agent',
        type: contents?.[0]?.dataType || 'text',
        message: contents?.[0]?.text || ''
      })
  } else {
    if (['text', 'markdown'].includes(contents?.[0]?.dataType)) {
      if (contents?.[0]?.type === 'replace') {
        lastMessage.message = contents?.[0]?.text || '';
      } else {
        lastMessage.message += contents?.[0]?.text || '';
      }
    }
  }
  setTimeout(() => {
    scrollMessageToBottom();   
  }, 1000);
}

const scrollMessageToBottom = () => {
  const container = document.getElementById('messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}
</script>

<template>
  <main>
    <h3>欢迎使用我的Agent工具集MyAgents！在这里，你可以与多个平台的智能体进行对话。</h3>

    <Messages :messages="messages" id="messages" />

    <Chat @send-message="onSendMessage" @post-answer="onPostAnswer" @post-conversation="onPostConversation" />
  </main>
</template>
