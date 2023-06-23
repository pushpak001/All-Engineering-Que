document.addEventListener('DOMContentLoaded', function() {
    var ebookList = document.getElementById('ebook-list');
  
    // Array of eBook objects
    var ebooks = [
      {
        title: 'SPPU TEIT All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/12oMfECu9nveyXMFNtu3fUhm335ViqPU3?usp=share_link'
      },
      {
        title: 'SPPU TE ENTC all Que Paper 2019 Pattern',
        exam: 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
          file: 'https://drive.google.com/drive/folders/1Oip9R1fiAq8kmKynmWlFhZ5yQfMg-ubz?usp=share_link'
        },
        {
          title: 'SPPU TE IT all Easy Solutions 2019 Pattern',
          exam: 'winter/summer 2022-23',
          description: '',
            file: 'https://drive.google.com/drive/folders/1WCs-j3XqulUtr2oaKMRkq6F7Vsw_t_LZ?usp=share_link'
          },
        {
        title: 'SPPU TECOMP All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/17KP2KUNXaVWiiSSJ5G6_dL-nUT8z4xpl?usp=share_link'
      },
        {
        title: 'SPPU TE Automation & Robotics All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/1ZkFWSrpA2itSikccISIKIJNKDXBfvbTw?usp=share_link'
      },

        {
        title: 'SPPU TE Electrical Engineering All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/1m9_7RzaCD1J9PJrC91TXMPGU2PFtY2-7?usp=share_link'
      },

        {
        title: 'SPPU TE Civil Engineering All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/1Hp7ahtAdGwmww2tOARAZQNvKN1e-dCiO?usp=share_link'
      },
        {
        title: 'SPPU TE (AIDS) Engineering All Que Paper 2019 Pattern',
        exam : 'winter/summer 2022-23',
        description: 'Regular And Backlog All que paper in winter/summer',
        file: 'https://drive.google.com/drive/folders/1QCfTQVe777FmxD0UH6qP-kqg5ZKnQwpD?usp=share_link'
      },
      // Add more eBook objects as needed
    ];
  
    // Display eBooks
    ebooks.forEach(function(ebook) {
      var ebookItem = document.createElement('div');
      ebookItem.className = 'ebook-item';
  
      var titleElement = document.createElement('h2');
      titleElement.className = 'ebook-title';
      titleElement.textContent = ebook.title;
  
      var examElement = document.createElement('p');
      examElement.className = 'ebook-exam';
      examElement.textContent = 'exam: ' + ebook.exam;
  
      var descriptionElement = document.createElement('p');
      descriptionElement.className = 'ebook-description';
      descriptionElement.textContent = ebook.description;
  
      var downloadLink = document.createElement('a');
      downloadLink.className = 'ebook-download';
      downloadLink.href = ebook.file;
      downloadLink.textContent = 'Download';
  
      ebookItem.appendChild(titleElement);
      ebookItem.appendChild(examElement);
      ebookItem.appendChild(descriptionElement);
      ebookItem.appendChild(downloadLink);
  
      ebookList.appendChild(ebookItem);
    });
  });
  
