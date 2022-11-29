FROM library/postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD pg123
ENV POSTGRES_DB sisfilmes
COPY index.sql /docker-entrypoint-initdb.d/
EXPOSE 5432